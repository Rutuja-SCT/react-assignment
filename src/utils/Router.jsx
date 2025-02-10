import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AppRoutes from './routes';

const Router = () => {
  return (
    <Routes>
      {AppRoutes.map((route) => {
        const { Component, ...rest } = route;
        return (
          <Route
            key={route.index}
            path={route?.path}
            element={
                <Component />
            }
            {...rest}
          />
        );
      })}
    </Routes> 
  )
}

export default Router
