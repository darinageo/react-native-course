import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    renderDescription() {
        const { library, expanded } = this.props;
        if (expanded){
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>{library.item.description}</Text>
                </CardSection>
            );
        }

        // const { library, selectedLibraryId } = this.props;
        // if (library.item.id === selectedLibraryId){
        //     return (
        //         <Text>{library.item.description}</Text>
        //     );
        // }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()} 
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    //return { selectedLibraryId: state.selectedLibraryId };
    const expanded = state.selectedLibraryId === ownProps.library.item.id;
    return { expanded };
};

// the first arg (null in this case) is explicitly for map state to process.
// if we don't want to map states props we have to pass null
export default connect(mapStateToProps, actions)(ListItem);
