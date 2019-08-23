import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import styled from 'styled-components'

const DivPrincipal = styled.View `
  background-color: #DCDCDC;
  flex: 1;
  justify-content: center;
  align-items: center;
`


export default class App extends React.Component {
  state = {
    user: '',
    pass: ''
  }

  render() {
    return (
      <DivPrincipal>
        <View style={{ marginBottom: 10 }}>
          <Image
          style={{width: 200, height: 200}}
          source={{ uri: 'https://image.flaticon.com/icons/png/512/149/149071.png' }} />
        </View>

        <View style={styles.divForms}>
          <TextInput 
          onChangeText={user => this.setState({ user })}
          style={styles.inputUser} placeholder="Usuário" />
          <TextInput 
            onChangeText={pass => this.setState({ pass })}
            secureTextEntry style={styles.inputUser} placeholder="Senha" /> 
          <View>
            <TouchableOpacity
            style={styles.button}
          >
            <Text 
            style={{ color: 'white', fontSize: 30 }}> 
              Login 
            </Text>
          </TouchableOpacity>
          </View>
        </View>
      </DivPrincipal>
    );
  }
}

const styles = StyleSheet.create({
  principal: {
    backgroundColor: '#DCDCDC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  divForms: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    height: 300,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 200
  },
  inputUser: {
    width: 350,
    height: 50,
    borderWidth: 0,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    fontSize: 20
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    width: 350,
    height: 55
  },
});
