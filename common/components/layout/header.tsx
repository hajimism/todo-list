import { LoggedInUserIcon } from "@/model/user/components/logged-in-user-icon";

export const Header = () => (
  <header className='h-12 shadow'>
    <div className='container mx-auto flex h-full items-center justify-between'>
      <span className='text-2xl font-bold'>hajimism/app</span>
      <LoggedInUserIcon />
    </div>
  </header>
);
