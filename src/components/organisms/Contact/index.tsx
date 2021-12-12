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
import VisibilitySensor from 'react-visibility-sensor';

type Props = {
  setLinksVisibility: (isVisible: boolean) => void;
};

function Contact({ setLinksVisibility }: Props) {
  const { t } = useTranslation('common');

  const socialLinks = useMemo(() => {
    return links.map(({ name, href }: LinkType) => (
      <Link key={name} href={href}>
        {t(`contact.${name}`)}
      </Link>
    ));
  }, [t]);

  return (
    <Wrapper id='contact'>
      <Header>{t('contact.contact-me')}</Header>
      <Content>
        <Side>
          <Title>{t('contact.say-hi')}</Title>
          <Mail href={`mailto:${MAIL}`}>{MAIL}</Mail>
        </Side>

        <VisibilitySensor
          partialVisibility
          onChange={(isVisible) => setLinksVisibility(isVisible)}
        >
          <LinksSide>
            <LinksGroup>{socialLinks}</LinksGroup>
          </LinksSide>
        </VisibilitySensor>
      </Content>
    </Wrapper>
  );
}

export default Contact;
