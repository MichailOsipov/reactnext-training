import { TEXTS } from '../texts';
import { ThemeToggler } from '../themeToggler';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export const Header = () => {
  return (
    <header className="sticky top-0 w-full flex items-center gap-4 p-5 bg-secondary">
      <Input placeholder={TEXTS.header.search.placeholder} />
      <Button type="button">
        {TEXTS.header.orders.text}
      </Button>
      <Button type="button">
        {TEXTS.header.favorites.text}
      </Button>
      <Button type="button">
        {TEXTS.header.profile.text}
      </Button>
      <Button type="button">
        {TEXTS.header.basket.text}
      </Button>
      <ThemeToggler />
    </header>
  );
};
