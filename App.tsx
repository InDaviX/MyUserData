import React, {useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  // Switch,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import Icons from 'react-native-vector-icons/Feather';

const App = () => {
  const [uName, setUName] = useState('');
  const [uAge, setUAge] = useState('');
  const [showMore, setShowMore] = useState(true);
  const [settedUName, setSubmittedUName] = useState('');
  const [settedUAge, setSubmittedUAge] = useState('');

  return (
    <SafeAreaView style={{backgroundColor: '#B6B6B6', flex: 1}}>
      <ScrollView>
        <View
          style={{
            flex: 1,
            alignItems: 'stretch',
            paddingTop: 15,
          }}>
          <TextInput
            value={uName}
            placeholder="Name"
            onChangeText={value => {
              setUName(value);
            }}
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 20,
              marginHorizontal: 20,
              marginVertical: 10,
              textAlign: 'center',
              fontSize: 21,
              backgroundColor: 'white',
            }}
          />
          <TextInput
            value={uAge}
            placeholder="Age"
            onChangeText={value => {
              setUAge(value);
            }}
            style={{
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 20,
              marginHorizontal: 20,
              marginVertical: 10,
              textAlign: 'center',
              fontSize: 21,
              backgroundColor: 'white',
            }}
          />
          <Pressable
            onPress={() => {
              console.log(uName, uAge);
              setSubmittedUName(uName);
              setSubmittedUAge(uAge);
              setUName('');
              setUAge('');
            }}>
            <Text
              style={{
                borderColor: 'black',
                borderWidth: 1,
                borderRadius: 20,
                marginHorizontal: 20,
                marginVertical: 10,
                textAlign: 'center',
                backgroundColor: 'blue',
                color: 'white',
                fontSize: 23,
                padding: 10,
              }}>
              Submit
            </Text>
          </Pressable>
          {/* <TouchableWithoutFeedback onPress={() => setShowMore(!showMore)}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 20,
                justifyContent: 'center',
              }}>
              <Switch
                style={{marginTop: 3}}
                value={showMore}
                onValueChange={value => {
                  setShowMore(value);
                }}
              />
              <Text
                style={{
                  paddingLeft: 5,
                  paddingRight: 30,
                  fontSize: 18,
                  color: 'black',
                }}>
                Show my data
              </Text>
            </View>
          </TouchableWithoutFeedback> */}
          <TouchableWithoutFeedback
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={{width: 'auto', height: 60, backgroundColor: '#A9A9A9'}}>
            <Icons
              name={showMore ? 'chevron-down' : 'chevron-up'}
              size={40}
              color="black"
              style={{padding: 10, alignSelf: 'flex-end'}}
            />
          </TouchableWithoutFeedback>
        </View>

        <View
          style={{
            opacity: showMore ? 1 : 0,
            pointerEvents: showMore ? 'auto' : 'none',
          }}>
          <Text
            style={{
              marginHorizontal: 30,
              fontSize: 21,
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 4,
              paddingVertical: 5,
              paddingHorizontal: 10,
              marginVertical: 10,
              backgroundColor: 'white',
            }}>
            Wpisane imie: {settedUName}
          </Text>
          <Text
            style={{
              marginHorizontal: 30,
              fontSize: 21,
              borderColor: 'blue',
              borderWidth: 1,
              borderRadius: 4,
              paddingVertical: 5,
              paddingHorizontal: 10,
              backgroundColor: 'white',
            }}>
            Podany wiek: {settedUAge}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
