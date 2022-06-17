import {
  FormDescription,
  FormInput,
  FormInputButton,
  FormInputWrapper,
  FormTitle,
  FormWrapper,
} from './components';

export const GetStartedForm = () => {
  return (
    <FormWrapper>
      <div>
        <FormTitle>Free ebook</FormTitle>
        <FormDescription>
          5 Things You Can Do Right Now to Speed up Your Workflow
        </FormDescription>
      </div>
      <FormInputWrapper>
        <FormInput placeholder="Email Address" type="text" />
        <FormInputButton>Subscribe</FormInputButton>
      </FormInputWrapper>
    </FormWrapper>
  );
};
