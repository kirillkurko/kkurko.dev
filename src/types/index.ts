interface Link {
  url: string;
}

interface Text {
  link: Link;
  content: string;
}

interface Annotations {
  bold: boolean;
  code: boolean;
  color: string;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
}

export interface RichText {
  annotations: Annotations;
  text: Text;
}
