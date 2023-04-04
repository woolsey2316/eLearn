import TaskModal from './TaskModal'

describe("Task form render Page", () => {
  it('renders the Task form', () => {
    const {getByText} = render(<TaskModal/>);
    expect(getByText(/Add a new Task/i)).toBeInTheDocument();
  });

  it('render 2 input components', () => {
    const {getByLabelText} = render(<TaskModal/>);
    expect(getByLabelText(/title/i)).toBeInTheDocument();
    expect(getByLabelText(/due/i)).toBeInTheDocument();
  });

  it('renders a submit button', () => {
    const {getByText} = render(<TaskModal/>);
    expect(getByText("Submit")).toBeInTheDocument();
  });
});