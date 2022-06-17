import { HeaderWrapper } from './components';

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>
        <ul>
          <li>Categories</li>
          <li>Authors</li>
          <li>Template</li>
        </ul>
      </div>
      <div>
        <div>iconImage</div>
        <button>Subscribe</button>
      </div>
    </HeaderWrapper>
  );
};
