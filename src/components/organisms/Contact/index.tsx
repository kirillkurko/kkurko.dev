import { useMemo } from 'react';
import {
  Wrapper,
  Header,
  Title,
  Content,
  Side,
  LinksGroup,
  Link,
  LinksSide,
  Mail,
} from './atoms';
import links, { Link as LinkType } from '@constants/links';
import { MAIL } from '@constants/common';
import { useTranslation } from 'next-i18next';

function Contact() {
  const { t } = useTranslation('common');

  const socialLinks = useMemo(() => {
    return links.map(({ name, href }: LinkType) => (
      <Link key={name} href={href}>
        {t(`contact.${name}`)}
      </Link>
    ));
  }, [t]);

  return (
    <Wrapper>
      <Header>{t('contact.contact-me')}</Header>
      <Content>
        <Side>
          <Title>{t('contact.say-hi')}</Title>
          <Mail>{MAIL}</Mail>
        </Side>
        <LinksSide>
          <LinksGroup>{socialLinks}</LinksGroup>
        </LinksSide>
      </Content>
    </Wrapper>
  );
}

export default Contact;
