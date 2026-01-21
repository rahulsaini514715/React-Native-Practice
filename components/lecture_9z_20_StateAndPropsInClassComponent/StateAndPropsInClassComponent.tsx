// import React, { Component } from 'react';
// import { View, Text, Button } from 'react-native';

// class StateAndPropsInClassComponent extends Component {
//   state = {
//     fruit: 'Apple',
//   };

//   changeFruit = () => {
//     this.setState({ fruit: 'Mango' });
//   };

//   render() {
//     return (
//       <View>
//         {/* Props */}
//         <Text style={{ fontSize: 22 }}>
//           Hello {this.props.name}
//         </Text>

//         {/* State */}
//         <Text style={{ fontSize: 22 }}>
//           Fruit: {this.state.fruit}
//         </Text>

//         <Button title="Change Fruit" onPress={this.changeFruit} />
//       </View>
//     );
//   }
// }

// export default StateAndPropsInClassComponent;





//---------------------------------------------------------------------------
import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Student from './Student';

class StateAndPropsInClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Anil',
    };
  }

  updateName = (val) => {
    this.setState({ name: val });
  };

  render() {
    return (
      <View>
        <Text style={{ fontSize: 24, textAlign: 'center' }}>
          Parent Component
        </Text>

        <TextInput
          placeholder="Enter your name"
          onChangeText={(text) => this.updateName(text)}
          style={{ borderWidth: 1, margin: 10, padding: 10 }}
        />

        {/* Props pass to Student */}
        <Student name={this.state.name} />
      </View>
    );
  }
}

export default StateAndPropsInClassComponent;
