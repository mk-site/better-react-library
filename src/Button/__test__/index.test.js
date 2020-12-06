import React from 'react';
import { render, screen, RenderResult, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '@/Button/index.tsx';

test('测试button组件', () => {
    const testText = '按钮'
    render(<Button>{testText}</Button>)
    expect(screen.queryByText(testText)).toBeInTheDocument();
  })