import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import '../../static/Home.css';
import { ISectionWithEffect } from './types';

export const SectionWithEffect: FC<ISectionWithEffect> = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Вмикнути один раз після першого входу в поле зору
  });

  return (
    <section ref={ref} className={`hideSection ${inView ? 'show' : ''}`}>
      {children}
    </section>
  );
};
