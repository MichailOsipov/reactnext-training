import { TEXTS } from '../texts';
import { ThemeToggler } from '../themeToggler';
import { ButtonLink } from '../ui/button';
import { Input } from '../ui/input';

export const Header = () => {
  return (
    <header className="sticky top-0 w-full flex md:items-center lg:items-center flex-col md:flex-row lg:flex-row gap-4 p-5 bg-secondary">
      <Input placeholder={TEXTS.header.search.placeholder} />
      <div className="flex gap-4">
        <ButtonLink href="/orders">
          {TEXTS.header.orders.text}
        </ButtonLink>
        <ButtonLink href="/favorites">
          {TEXTS.header.favorites.text}
        </ButtonLink>
        <ButtonLink href="/profile">
          {TEXTS.header.profile.text}
        </ButtonLink>
        <ButtonLink href="/basket">
          {TEXTS.header.basket.text}
        </ButtonLink>
        <ThemeToggler />
      </div>
    </header>
  );
};
