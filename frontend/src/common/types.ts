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
export type FirstStepForm = {
  buttonIsDisabled: boolean;
  chooseDegreeState: Array<{
    id: string;
    htmlId: string;
    label: string;
    checked: boolean;
  }>;
};
export type SecondStepForm = string;
export type ThirdStepForm = {
  buttonIsDisabled: boolean;
  chooseDegreeState: Array<{
    id: string;
    htmlId: string;
    label: string;
    checked: boolean;
  }>;
};
