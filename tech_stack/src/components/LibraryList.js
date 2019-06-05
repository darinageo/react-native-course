import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library){
        return <ListItem library={library} />;
    }

    render() {
        //console.log(this.props);
        return (
            <FlatList 
                data={this.props.libraries} //data is prop
                renderItem={this.renderItem}
                keyExtractor={library => library.id} // create a key for each element
            />
        );
    }
}

// purpose: take the global STATE objest and map it
// and provide them as props to our component of librabry list
// the magic: if we return ano bject from this f(x) it
// can be used as props in the f(x) LibraryList
const mapStateToProps = state => {
    //console.log(state);
    return { libraries: state.libraries };
};

// calls the f(x) connect and it returns another f(x)
// then immidiately call that f(x) with the lib list
export default connect(mapStateToProps)(LibraryList);
