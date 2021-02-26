import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from '../App';

test('home work as expected',async () => {
  const {container}=render(<App/>)
  const gifLink=await waitForElement(
      ()=>container.querySelector('.Gif-link')
  )(
  expect(gifLink).toBeVisible)
});
