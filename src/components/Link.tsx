interface LinkProps {
  url: string;
  text: string;
  primary?: boolean;
}

export const Link = ({ url, text, primary }: LinkProps) => (
  <a
    href={url}
    target="_blank"
    className={`btn ${primary ? "btn-primary" : "btn-secondary"}`}
  >
    {text}
  </a>
);
