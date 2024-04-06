import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style';
import InputComponent from '../../../components/InputComponent';
import { filterIcon, searchIcon } from '../../../assets/icons';
import { colors } from '../../../theme/Color';
import TeamRosterList from '../../../components/TeamRosterList';

export default function TeamRoster(props: any) {

  const { data } = props

  const [selectedId, setSelectedId] = useState();
  // let colorsS = [colors.white , colors.placeholder];
  // <View style={{ backgroundColor: colors[index % colors.length] }}>
  // <Text style={styles.listStyle}>{item.title}, {item.releaseYear}</Text>
  // </View>
  const renderItem = ({ item }) => {
    // const backgroundColor = item.id === selectedId ? colors.primary : colors.placeholderColor;
    // const color = item.id === selectedId ? colors.black : colors.secondary;

    return (
      <>

        <TeamRosterList
          item={item}
          avatarAge={item?.age}
          avatarDob={item?.dateOfBirth}
          avatarHeight={item?.displayHeight}
          avatarImage={item?.headshot?.href}
          avatarTitle={item?.firstName + ' ' + item?.lastName}
          avatarWeight={item?.displayWeight}
          onPress={() => setSelectedId(item.id)}
        />
      </>
    );
  };
  return (
    <View style={styles.bgContainer}>
      <View style={styles.searchBar}>
        <InputComponent
          placeholder={'Search Profile'}
          iconImg={searchIcon}
          style={styles.searchInput}
        />
        <TouchableOpacity style={styles.filterStyle}>
          <Image source={filterIcon} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={styles.TeamRosterList}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
}
