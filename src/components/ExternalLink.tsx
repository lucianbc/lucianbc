import React from "react";

export const ExternalLink = (
  props: JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLAnchorElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
) => <a {...props} target="_blank" />;
