import React, { useState } from 'react';
import { View, Text, Button, SafeAreaView } from 'react-native';
import UserData from './components/lecture_7_component/UserData';
import Button_Onpress from './components/lecture_8_button_onPress/Button_Onpress';
import StateVsVariable from './components/lecture_9_state/StateVsVariable';
import PropsExample from './components/lecture_9z_10_Props/PropExample';
import StyleExample from './components/lecture_9z_11_Props/StyleExample';
import TextInputValue from './components/lecture_9z_12_Text_input_value/TextInputValue';
import BasicForm from './components/lecture_9z_13_Basic_Form/BasicForm';
import FlatListExample from './components/lecture_9z_14_flatList/FlatListExample';
import ListWithMapFunction from './components/lecture_9z_15_list_with_map_function/ListWithMapFunction';
import Dynamic_Grid from './components/lecture_9z_16_make_dynamic_grid/Dynamic_Grid';
import ComponentInLoopWithFlatlist from './components/lecture_9z_17_Component_in_loop.tsx/ComponentInLoopWithFlatlist';
import SectionListExample from './components/lecture_9z_18_Section_List.tsx/SectionListExample';
import ClassComponent from './components/lecture_9z_19_Class_component/ClassComponent';
import StateAndPropsInClassComponent from './components/lecture_9z_20_StateAndPropsInClassComponent/StateAndPropsInClassComponent';
import UseEffect_Hook_As_LifeCycle from './components/lecture_9z_23_useEffect_Hook_As_LifeCycle/UseEffect_Hook_As_LifeCycle';
import UseEffect_Hook_As_ComponentDidUpdate from './components/lecture_9z_24_useEffect_Hook_as_ComponentDidUpdate/UseEffect_Hook_As_ComponentDidUpdate';
import ToggleShowHide from './components/lecture_9z_25_Toggle_show_hide/ToggleShowHide';
import UseEffectComponentDidUnmount from './components/lecture_9z_26_UseEffect_ComponentDidUnmount/UseEffectComponentDidUnmount';
import FlexBoxRespnsiveLayout from './components/lecture_9z_27_FlexBox_Respnsive_layout/FlexBoxRespnsiveLayout';
import TouchableHighLightButton from './components/lecture_9z_28_TouchableHighLight_button/TouchableHighLightButton';
import RadioButton from './components/lecture_9z_29_Radio_Button/RadioButton';
import ActivityIndicatorLoader from './components/lecture_9z_31_ActivityIndicatorLoader/ActivityIndicatorLoader';
import ModalDialogBox from './components/lecture_9z_32_Modal_dialog_Box/ModalDialogBox';
import PressableLongPress from './components/lecture_9z_33_PressableLongPress/PressableLongPress';
import StatusBarExample from './components/lecture_9z_34_StatusBar/StatusBarExample';
import PlatformCheckOs from './components/lecture_9z_35_Platform_check_OS/PlatformCheckOs';
import NpmInstallWebView from './components/lecture_9z_36_Npm_Install_WebView/NpmInstallWebView';
import CustomDialogWithoutModal from './components/lecture_9z_37_Custom_modal_Dialog_Box/CustomDialogWithoutModal';
import StackNavigationPractice from './components/lecture_9z_39_Stack_Navigation/StackNavigationPractice';
import Stack_NavigationStyle from './components/lecture_9z_40_Stack_NavigationStyle/StackNavigationPractice';
import StackNavigationButtonAndComponent from './components/lecture_9z_41_Stack_NavigationButtonAnd_Component/StackNavigationButtonAndComponent';
import Stack_Navigation_passsing_data_between_screen from './components/lecture_9z_42_Stack_Navigation_passing_data_between_screen/Stack_Navigation_passing_data_between_screen';
import Tab_Navigation from './components/lecture_9z_43_Tab_Navigation/Tab_Navigation';
import Tab_NavigationTop from './components/lecture_9z_44_Tab_NavigationTop/Tab_Navigation';
import Fetch_Api from './components/lecture_9z_46_Fetch_Api/Fetch_Api';
import ListWithApiData from './components/lecture_9z_47_ListWithApiData/ListWithApiData';
import FlatListWithApiData from './components/lecture_9z_48_FlatListWithApiData/FlatListWithApiData';
import FetchDataFromJsonServer from './components/lecture_9z_51_FetchDataFromJsonServer/FetchDataFromJsonServer';
import PostDataFromJsonServer from './components/lecture_9z_52_PostDataFromJsonServer/PostDataFromJsonServer';
import ValidationPostDataFromJsonServer from './components/lecture_9z_53_ValidationPostDataFromJsonServer/ValidationPostDataFromJsonServer';
import ListWithApiDataUpdateAndDelete from './components/lecture_9z_54_ListWithApiData_JsonServer/ListWithApiDataUpdateAndDelete';
import SearchWithApi from './components/lecture_9z_55_SearchWithApi/SearchWithApi';
import RefPractice from './components/lecture_9z_61_Ref/RefPractice';
import AsyncStorageScreen from './components/lecture_9z_64_Async_Storage/AsyncStorage';
import ElementInspectorPractice from './components/lecture_9z_65_ElementInspector/ElementInspectorPractice';

const name = "Rahul R saini";
// var email = "abc@test.com";

function fruit() {
  return "apple";
}
function App(): JSX.Element {
  const age = 22;
  const [email, setEmail] = useState("sksaini@gmail.com");
  return (
    <SafeAreaView style={{ flex: 1 }}>

    <View style={{ flex: 1 }}>
      {/* <Text style={{ fontSize: 30 }}>{name} 🚀</Text>
      <Text style={{ fontSize: 30 }}>{fruit()}</Text>
      <Button title='press here'></Button> */}
      {/* <UserData /> */}
      
      {/* <Button_Onpress/> */}

      {/* <StateVsVariable/> */}
      
      {/* <Button title='update props' onPress={()=>setEmail("monika saini")}/>
      <PropsExample name={"this value comes fro props from app.js"} email={email}/> */}

      
      {/* <StyleExample/> */}

      {/* <TextInputValue/> */}

      {/* <BasicForm/> */}


      {/* <FlatListExample/> */}

      {/* <ListWithMapFunction/> */}

      {/* <Dynamic_Grid /> */}
      
      {/* <ComponentInLoopWithFlatlist/> */}

      {/* <SectionListExample/> */}


      {/* <ClassComponent/> */}

      {/* <StateAndPropsInClassComponent name="Rahul" /> */}

      {/* <UseEffect_Hook_As_LifeCycle/> */}

      {/* <UseEffect_Hook_As_ComponentDidUpdate/> */}


      {/* <ToggleShowHide/> */}


      {/* <UseEffectComponentDidUnmount/> */}


      {/* <FlexBoxRespnsiveLayout/> */}


      {/* <TouchableHighLightButton/> */}
      

      {/* <RadioButton/> */}


      {/* <ActivityIndicatorLoader/> */}


      {/* <ModalDialogBox/> */}

      {/* <PressableLongPress/> */}


      {/* <StatusBarExample/> */}


      {/* <PlatformCheckOs/> */}


      {/* <NpmInstallWebView/> */}

      {/* <CustomDialogWithoutModal/> */}


      {/* <StackNavigationPractice/> */}
      
      
      {/* <Stack_NavigationStyle/> */}



      {/* <StackNavigationButtonAndComponent/> */}

      {/* <Stack_Navigation_passsing_data_between_screen/> */}


      {/* <Tab_Navigation/> */}

      {/* <Tab_NavigationTop/> */}

      {/* <Fetch_Api/> */}

      {/* <ListWithApiData/> */}

      {/* <FlatListWithApiData/> */}

      {/* <FetchDataFromJsonServer/> */}

      {/* <PostDataFromJsonServer/> */}


      {/* <ValidationPostDataFromJsonServer/> */}


      {/* <ListWithApiDataUpdateAndDelete/> */}

      {/* <SearchWithApi/> */}


      {/* <RefPractice/> */}

      {/* <AsyncStorageScreen/> */}
  

      <ElementInspectorPractice/>

      

    </View>

  </SafeAreaView>
  );
  
}



export default App;
