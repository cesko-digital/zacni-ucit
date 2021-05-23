export type TeacherType = {
  id: string;
  attributes: {
    email: string;
    metadata: {
      firstName: string;
      lastName: string;
    };
  };
};
export type FirstStepForm = Array<{
  id: string;
  htmlId: string;
  label: string;
  checked: boolean;
}>;
export type SecondStepForm = Array<{
  id: string;
  htmlId: string;
  label: string;
  checked: boolean;
}>;
