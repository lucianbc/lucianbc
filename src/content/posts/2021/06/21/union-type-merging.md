---
title: Union Type Merging in Typescript
tags:
  - typescript
  - tutorial
  - webdev
---

Typescript unions can be very useful in a lot of cases. They can be used to implement [algebraic data types](https://stackoverflow.com/questions/33915459/algebraic-data-types-in-typescript#:~:text=TypeScript%202.0%20has%20support%20for,unions%20or%20algebraic%20data%20types.) when having a [discriminator](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions) key. Without such a discriminator, they can be quite limiting. This guide describes merging an object union - another pattern that can be used to enhance type union usability.

TL;DR; This article shows you how to merge a type union (of objects) into a single object type. Find all the steps in the typescript playground [here](https://www.typescriptlang.org/play?ts=4.2.3#code/C4TwDgpgBMCMUF4oG8CwAoKUCGAuKAzsAE4CWAdgOYDcGWARvuQK4C29ExtmUEA-PiJkq3AL7cMoSDABMiFHRyCSFGooDGTNhy6L+y4WvTiMk8NGABmeWh54oLdp25YAJgdUuojQipF6Pf2MJdCkLAgIbRXshVSgAHwdtZ0V6ASSnYgSoZnJXCAAzCghXL3V0xx1s3Pyi8hKvVwrkrMSawuLSvXTYqmq8jvqu41NQ8xhIpDhs4DlEqxCwqABhAHtWVlXyAGkIEAIAHgAVXgAPYAg8yNX6ACsIdWAAPnkAaz3Vgqgj7iWAQQANgDdvtji8kCcIOdLq5IthyCAoHwoO8QJ9vlAmBAAG4pMbSADKzHoJGwjwOfwANCtwVA-mcLlcVkiHDjOJi6b9xgA5LZrDZbEGHSHQpk3e6PWlEknEMnAClAoVg6n8zY7PbCp5PRbjAAKpHUryO5mO1O2DJhkUBwI1YNpIsZsJQUAA2q8oBQoNsALrpeGI0Qso4un0c9p1BqjJbYd1Ia1K4AEbVmaSG+SqwW2xPJ-HQcixqC88gZ9Wg7M66TYYDyfWG42QA6J6kAcmwze1UAA9J3eNjsMwAVWIJFgKtfIZspVOCnoCSawajSam1Bm-R29Quz2cf3BxcR2PepRJy1+rVOjOoI953WlwQW+p15vezuh-uMlU2gMI64L65q0ha0XBtl2bVxH27Z8B1fGADz8I9PzPIYLwgf8oEA+sIEbO8VwgcCtz7KC9xg8c4gQwYSijcYAFlOEoTCHUtKBxQeZ4oh4N0PXIFZ1jVJUjieb18HQ8wAHkClNFEngwQMADIFHY91PSLEs+IE9JhMgMSJNeKTgko6QNIgLSjjNC0mUPY9MmyAgQHYVYAVpc0oUdK1FVtfiWUMiTtheLFcV0dAL1QmjiDorCcwvU55GAF1W2bb0QnULYiBgPsAVgfBUNsLB7GbWAZEsAAWZtKVSfB8ssUq9MC9AkvIFLgDSmRMrYnL8DygriqqrBNCgCrCqqkwarqhq0ssFqkGypQ+oK7qoHcFcAE5LBKsqVxWuaIHa5tpMS5LqwAC3hVwAU4AAxXJHlILZ5AACka7AAUygBKRAXimkbq2waK0oAOmwMp9u8H7Ht++hAfq6t1BBgFfvUCGUtcGHfuGHqgegKY-ogEI0fq+yIBRiB6GYShbubAB3A7LkvZK2DiYAqagNLmAgakAEkoDo4ASpwal6GpdRqVcakIGenGYHGRNWqwaaYri705oYTLYrXBXFB65XmwfNWeDcTWwJ1mXeE13DDagURdtGI68lO4gLvIK6tnutLYDFjBrZO87LuAa7yGdx6ZDd9APdt+3Hb9h6AUsIPRk+wh4EmxRmMeDD2oIWBVp4ZmIFTqBluknBIk+vbIcIORE54ZPgFz5sCBkTOsGYAhODZ8gwGYYB2sWmQM4L7Ai-2itoEmCXIHRdOZnMceZBLlKQ4gAk7uz-AQrCpNXoQd7FFIL5buz36q4wxAECQWuM9eqbcZSqKkH37OMK8K-8cJ4nSebDnKFWL6uIn8nSAZnmpwg5YEDBAAEzd5JGzjoiW+j0Wa-Sbi3NuHdH40zxqdF+JMyYfy-jgH+cg-4AOpCAYB5tpKjAvAAL2lvoEiQQhpBQxlAShsVTbUCAA).

## What we're building

Suppose we have the following types:

```ts
type t1 = {
  a: string;
  b: number;
  e?: string;
};

type t2 = {
  a: string;
  c: number;
  e?: string;
};

type t3 = {
  a: number;
  d: string;
  b: string;
  e: string;
};

type ts = t1 | t2 | t3;
```

We want to process these types and end up with something like this:

```ts
type t = {
  a: string | number;
  b?: number | undefined;
  c?: number | undefined;
  d?: number | undefined;
  e?: string | undefined;
};
```

### Why would we want such a type?

Let's suppose that these 3 types represent some configuration object and we have a variable that can be assigned to an object of any of the 3 types. We want to use this variable to handle this configuration. A natural representation for the type of this variable is `type ts = t1 | t2 | t3` which would read as `t1` **or** `t2` **or** `t3`. But in typescript, unions are a bit more complicated. You would not be able to access any other keys other than the common ones between the 3 types. That is because if a variable is either one of the 3 types, typescript is only able to guarantee that the object you are handling has the common keys between them, which would just be `a`.

This limitation can of course be circumvented with some type discriminators, be they a discriminating key or type guards. You can read more about this pattern [here](https://thoughtbot.com/blog/the-case-for-discriminated-union-types-with-typescript). Most of the use-cases will be covered by this approach, but sometimes we can't really distinguish between the types in our union and we have to handle all the possible cases.

Now let's think about what such a type union could mean. From the point of view of a function that receives such an object, it could mean that:

- the key `a` is defined and it could be a `string` or a `number`;
- the keys `b`, `c`, `d` might or might not be defined, depending on the instantiation of the object, so the function must be aware of this before accessing the keys;
- the key `e` might or might not be defined, since it appears in all the types but only `t3` requires it, so the function must be aware of this as well;

These requirements describe our target type `t`.

## Implementation

### Common Keys

Let's first figure out the common keys of a type union. That is, given an object type union, we want all of the keys that typescript allows us to access.

```ts
type CommonKeys<T extends object> = keyof T;

type ck = CommonKeys<ts>; // evaluates to "a" | "e"
```

### All Keys

Then, let's figure out all of the keys that the union contains:

```ts
type AllKeys<T> = T extends any ? keyof T : never;

type ak = AllKeys<ts>; // evaluates to "a" | "b" | "e" | "c" | "d"
```

This type is using the [distributive conditional types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types) feature to pick up all the keys. I imagine this operation as `map`-ing what is after `?` over each type in the union and then `join`-ing the result with `|` in between. So in the case of `ak` it could be described as follows:

```
t1 extends any ? (keyof t1) : never | t2 extends any ? (keyof t2) : never | t3 extends any ? (keyof t3) : never

<=>

(keyof t1) | (keyof t2) | (keyof t3)

<=>

("a" | "b" | "e") | ("a" | "c" | "e") | ("a" | "d" | "e")

<=>

"a" | "b" | "e" | "c" | "d"
```

This feature will be used in the next steps as well.

### Non Common Keys

The next step is to figure out the keys that are not common between the types in the union. To figure this out, we simply need to subtract the common keys from all of the keys of the given type.

```ts
type Subtract<A, C> = A extends C ? never : A;
type NonCommonKeys<T extends object> = Subtract<AllKeys<T>, CommonKeys<T>>;
type nk = NonCommonKeys<ts>; // evaluates to "b" | "c" | "d"
```

The type `Subtract` takes two type parameters, `A` for all the keys and `C` for the common keys and it basically iterates over all the values in `A` using the distributivity mentioned above and for each item in the union, if it is in `C`, then returns `never`, otherwise it returns the item.

Note that `type l1 = "a"` extends `type l2 = "a" | "b"`. That makes complete sense since, by definition, a type `l1` extends a type `l2` if all the values that are assignable to `l1` are assignable to `l2` as well. If you find that the strings `"a"` and `"b"` are types, find out more in the typescript docs about [literal types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-types).

The `NonCommonKeys` type is just a nicer interface so that the original parameter is our type union and not keys.

### Figure out the type of a given key

Now we want to be able to figure out what all the possible types of a given key are in a given type union. That is, given a type union `T` and a key `K`, if that key is present in an object in the union, return its type, otherwise return `undefined`.

```ts
type PickType<T, K extends AllKeys<T>> = T extends { [k in K]?: any }
  ? T[K]
  : undefined;

type at = PickType<ts, "a">; // evaluates to string | number
type bt = PickType<ts, "b">; // evaluates to string | number | undefined
type ct = PickType<ts, "c">; // evaluates to number | undefined
type dt = PickType<ts, "d">; // evaluates to string | undefined
type et = PickType<ts, "e">; // evaluates to string | undefined
```

Note that for a key that is present in all types, `undefined` will not be added to the mix. For keys that are missing in at least one type, the `undefined` will be present in the resulting union.

Also, note that the condition says that `T` must extend an object with the key `k` that can be optional, so that optionals are picked up correctly. Also, from the way typescript evaluates the type of an optional key, it will be marked as undefined.

```ts
type z = {
  e?: string;
};

type te = z["e"]; // evaluates to string | undefined
```

### Merge

Now we have all the ingredients to merge the original type union and create our desired type:

```ts
type Merge<T extends object> = {
  [k in CommonKeys<T>]: PickTypeOf<T, k>;
} & {
  [k in NonCommonKeys<T>]?: PickTypeOf<T, k>;
};

type PickTypeOf<T, K extends string | number | symbol> = K extends AllKeys<T>
  ? PickType<T, K>
  : never;

type t = Merge<ts>;
```

What we're doing is basically composing the type so that each key in the common keys is required and each key in the non common keys is optional. The `PickTypeOf` helper is just a proxy for `PickType` described above, but it was needed because typescript was not recognising the `k` in the expression above as extending `AllKeys<T>`.

The resulting type `t` is quite verbose on typescript v4.2, which introduced some algorithms to improve how types are displayed and even more verbose on versions prior to that. Feel free to check it out by cmd+hovering over it in the [playground](https://www.typescriptlang.org/play?ts=4.2.3&ssl=55&ssc=1&pln=56&pc=1#code/C4TwDgpgBMCMUF4oG8CwAoKUCGAuKAzsAE4CWAdgOYDcGWARvuQK4C29ExtmUEA-PiJkq3AL7cMoSDABMiFHRyCSFGooDGTNhy6L+y4WvTiMk8NGABmeWh54oLdp25YAJgdUuojQipF6Pf2MJdCkLAgIbRXshVSgAHwdtZ0V6ASSnYgSoZnJXCAAzCghXL3V0xx1s3Pyi8hKvVwrkrMSawuLSvXTYqmq8jvqu41NQ8xhIpDhs4DlEqxCwqABhAHtWVlXyAGkIEAIAHgAVXgAPYAg8yNX6ACsIdWAAPnkAaz3Vgqgj7iWAQQANgDdvtji8kCcIOdLq5IthyCAoHwoO8QJ9vlAmBAAG4pMbSADKzHoJGwjwOfwANCtwVA-mcLlcVkiHDjOJi6b9xgA5LZrDZbEGHSHQpk3e6PWlEknEMnAClAoVg6n8zY7PbCp5PRbjAAKpHUryO5mO1O2DJhkUBwI1YNpIsZsJQUAA2q8oBQoNsALrpeGI0Qso4un0c9p1BqjJbYd1Ia1K4AEbVmaSG+SqwW2xPJ-HQcixqC88gZ9Wg7M66TYYDyfWG42QA6J6kAcmwze1UAA9J3eNjsMwAVWIJFgKtfIZspVOCnoCSawajSam1Bm-R29Quz2cf3BxcR2PepRJy1+rVOjOoI953WlwQW+p15vezuh-uMlU2gMI64L65q0ha0XBtl2bVxH27Z8B1fGADz8I9PzPIYLwgf8oEA+sIEbO8VwgcCtz7KC9xg8c4gQwYSijcYAFlOEoTCHUtKBxQeZ4oh4N0PXIFZ1jVJUjieb18HQ8wAHkClNFEngwQMADIFHY91PSLEs+IE9JhMgMSJNeKTgko6QNIgLSjjNC0mUPY9MmyAgQHYVYAVpc0oUdK1FVtfiWUMiTtheLFcV0dAL1QmjiDorCcwvU55GAF1W2bb0QnULYiBgPsAVgfBUNsLB7GbWAZEsAAWZtKVSfB8ssUq9MC9AkvIFLgDSmRMrYnL8DygriqqrBNCgCrCqqkwarqhq0ssFqkGypQ+oK7qoHcFcAE5LBKsqVxWuaIHa5tpMS5LqwAC3hVwAU4AAxXJHlILZ5AACka7AAUygBKRAXimkbq2waK0oAOmwMp9u8H7Ht++hAfq6t1BBgFfvUCGUtcGHfuGHqgegKY-ogEI0fq+yIBRiB6GYShbubAB3A7LkvZK2DiYAqagNLmAgakAEkoDo4ASpwal6GpdRqVcakIGenGYHGRNWqwaaYri705oYTLYrXBXFB65XmwfNWeDcTWwJ1mXeE13DDagURdtGI68lO4gLvIK6tnutLYDFjBrZO87LuAa7yGdx6ZDd9APdt+3Hb9h6AUsIPRk+wh4EmxRmMeDD2oIWBVp4ZmIFTqBluknBIk+vbIcIORE54ZPgFz5sCBkTOsGYAhODZ8gwGYYB2sWmQM4L7Ai-2itoEmCXIHRdOZnMceZBLlKQ4gAk7uz-AQrCpNXoQd7FFIL5buz36q4wxAECQWuM9eqbcZSqKkH37OMK8K-8cJ4nSebDnKFWL6uIn8nSAZnmpwg5YEDBAAEzd5JGzjoiW+j0Wa-Sbi3NuHdH40zxqdF+JMyYfy-jgH+cg-4AOpCAYB5tpKjAvAAL2lvoEiQQhpBQxlAShsVTbUCAA).

## Conclusions

### Consuming the 3 types under one interface

This utility allows us to easily and reliably consume the 3 types in a handler function. As I said in the beginning, if `t1`, `t2` and `t3` are possible shapes for some config and we want a handler that should work for all the possible combinations, then we can write it as follows:

```ts
const handlerFunction = (tval: t) => {
  // can access all of the keys, not only the common ones
  const a = tval.a; // cannot be undefined
  const b = tval.b; // can also be undefined
  const c = tval.c; // can also be undefined
  const d = tval.d; // can also be undefined
  const e = tval.e; // can also be undefined

  console.debug("when consuming the value, I get", a, b, c, d, e);

  // hover in playground over each key to see the computed type
  type ts = {
    a: t["a"];
    b: t["b"];
    c: t["c"];
    d: t["d"];
    e: t["e"];
  };
};

handlerFunction(tval1);
handlerFunction(tval2);
handlerFunction(tval3);
```

### You might not need this

This was a nice theoretical experiment. In practice, you might not need such manipulations. You might as well write the merged type by hand and move on with your life. But I see cases in which you will need this. For example, this might be part of a library that allows people to write their configs and the compiler would infer the shape of that config. Then, wherever that config is consumed, you will get a compiler error if a change causes issues, without having to update a type definition.

### Only works for top-level keys

This merging pattern only works for the top level keys. For the issue I had at hand, this was enough. But there might be cases in which the merging should go deeper. Typescript 4.1 introduced [recursive conditional types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html#recursive-conditional-types) which could be used to extend this pattern.

As an inspiration, I found [this explanation](https://stackoverflow.com/a/60843132/3970447) on deep merging two types on stack overflow. I still haven't fully understood it.

### Alternative for Merge

A nice perk of the resulting type is that it respects the original constraints of the types when instantiating a new object. For example:

```ts
const tval1: t = {
  a: "1234",
  b: 123,
}; // valid assignment

const tval1_1: t = {
  a: 1234,
  b: 123,
}; // invalid assignment
```

We could have written `Merge` as follows:

```ts
type Merge2<T extends object> = {
  [k in AllKeys<T>]: PickType<T, k>;
};
```

In this case, the above invalid assignment would become valid if we were to specify the optionals as `undefined` in the object creation, since we lose the information about what is required and what is optional.

This conclusion is mostly theoretical, since this approach is the most useful when consuming the 3 types, not when creating an object of each of the types.

I hope you enjoyed reading this post and found it useful. Please leave a comment if you have any feedback and let me know if I have missed something or if you find a way to improve on top of this.
