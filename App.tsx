import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

function App(): JSX.Element {

  return (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
  );
}

export default App;


// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   return (
//     <View>
//       <Text>
//         {title}
//       </Text>
//       <Text>
//         {children}
//       </Text>
//     </View>
//   );
// }
