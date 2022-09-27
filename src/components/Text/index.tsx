import styles from './styles.module.css';
import classNames from 'classnames';
import { RichText } from '../../types';

interface Props {
  data?: RichText[];
}

const Text = ({ data }: Props) => {
  if (!data) {
    return null;
  }

  return (
    <>
      {data.map((value) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;

        return (
          <span
            key={text.content}
            className={classNames(
              bold && styles.bold,
              code && styles.code,
              italic && styles.italic,
              strikethrough && styles.strikethrough,
              underline && styles.underline,
            )}
            style={color !== 'default' ? { color } : {}}
          >
            {text.link ? (
              <a href={text.link.url}>{text.content}</a>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
};

export default Text;
