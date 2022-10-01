import EmptyPage from '@components/EmptyPage';

const TITLE = '404 – Page Not Found';
const DESCRIPTION =
  "I will talk to polar bears, they always destroy my pages. It seems you've found something that used to exist, or you spelled something wrong. I'm guessing you spelled something wrong. Can you double check that URL?";

export default function NotFound() {
  return (
    <div title='404 – Kirill Kurko'>
      <EmptyPage title={TITLE} description={DESCRIPTION} />
    </div>
  );
}
