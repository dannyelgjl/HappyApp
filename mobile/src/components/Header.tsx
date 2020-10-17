import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';


import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
}

// props: HeaderProps // { title } é uma maneira de desestruturar e pegar a props.title
export default function Header ({ title }: HeaderProps) {
  const navigation = useNavigation();

  const handleGoBackHome = () => {
    navigation.navigate("OrphanagesMap");
  }



  return (
    <View style={styles.container}>
      {/** BorderlessButton o botão sem bordar */}
      <BorderlessButton onPress={navigation.goBack} >
        <Feather  name="arrow-left" size={24} color="#15b6d6" />
      </BorderlessButton>
      <Text style={styles.title} >{ title }</Text>

      <BorderlessButton  onPress={handleGoBackHome} >
        <Feather  name="x" size={24} color="#ff669b" />
      </BorderlessButton>
    </View>
  );
}

