// navigation/AppNavigator.js
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import StudentStack from './StudentStack';
import OwnerStack from './OwnerStack';
import AuthStack from './AuthStack';

const AppNavigator = () => {
  const { user, userType } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? (
        userType === 'student' ? <StudentStack /> : <OwnerStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;