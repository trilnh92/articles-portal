import React, {Component} from 'react';
import Select from "react-select";
import {Col, Form, Row} from 'reactstrap';
import {observer} from "mobx-react";

@observer
class ArticlesFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
            options: []
        };

        this.getCategories = this.getCategories.bind(this);
    }

    componentDidMount() {
        this.getCategories();
    }

    getCategories() {
        const {store} = this.props;
        const categories = store.createCategoriesData();

        this.setState({
            options: categories
        });
        this.handleChange(categories[0]);
    };

    handleChange = (selectedOption) => {
        const {store} = this.props;

        this.setState({
            selectedOption
        });

        store.setCategoryId(selectedOption.value);
    };

    render() {
        const {selectedOption, options} = this.state;
        return (
            <section className="articles__filter">
                <Form>
                    <Row form>
                        <Col xs="12">


                            <Select
                                value={selectedOption}
                                onChange={this.handleChange}
                                options={options}
                                theme={(theme) => ({
                                    ...theme,
                                    colors: {
                                        ...theme.colors,
                                        primary: '#44BBA4',
                                        primary25: '#E9FEF8',
                                        primary50: '#E7FDFF',
                                        primary75: '#EAFBFF'
                                    }
                                })}
                            />

                        </Col>
                    </Row>
                </Form>
            </section>
        )
    }
}

export default ArticlesFilter;
