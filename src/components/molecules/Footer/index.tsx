import { Wrapper, Text } from './atoms';
import { useTranslation } from 'next-i18next';

function Footer() {
  const { t } = useTranslation('common');

  return (
    <Wrapper>
      <Text>{t('footer-message')}</Text>
    </Wrapper>
  );
}

export default Footer;
