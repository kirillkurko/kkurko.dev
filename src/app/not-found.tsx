import EmptyPage from '@components/EmptyPage';

const TITLE = '404 – Page Not Found';
const DESCRIPTION =
  "I will talk to polar bears, they always destroy my pages. It seems you've found something that used to exist, or you spelled something wrong. I'm guessing you spelled something wrong. Can you double check that URL?";

function NotFound() {
  return <EmptyPage title={TITLE} description={DESCRIPTION} />;
}

export default NotFound;
