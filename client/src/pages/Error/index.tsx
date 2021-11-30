import React from "react";
import { Container, Header } from "semantic-ui-react";

interface Props {
    error: Error;
}
interface States {}
export default class ErrorPage extends React.Component<Props, States> {
    render(): React.ReactElement<any> {
        return (
            <Container text>
                <div className="page-header">
                    <Header color="red" size="large">
                        { this.props.error ? this.props.error.name : "Error" }
                    </Header>
                    <p>
                        { this.props.error && this.props.error.message }
                    </p>
                </div>
            </Container>
        );
    }
}