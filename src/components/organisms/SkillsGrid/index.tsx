import React from 'react';
import { Wrapper, Grid, GridItem, Text } from './atoms';
import { useTranslation } from 'next-i18next';

const SKILLS = [
  { key: 'frontend', name: 'Frontend', color: '#284FCD' },
  { key: 'startups', name: 'Startups', color: '#053263' },
  { key: 'design', name: 'Design', color: '#CBA0D2' },
  { key: 'react', name: 'React', color: '#222' },
  { key: 'redux', name: 'Redux', color: '#7E57C2' },
  { key: 'next', name: 'Next', color: '#000' },
  { key: 'graph-ql', name: 'GraphQL', color: '#E535AB' },
  { key: 'html', name: 'HTML', color: '#FF6F00' },
  { key: 'css', name: 'CSS', color: '#039BE5' },
  { key: 'js', name: 'JS', color: '#FFD600' },
  { key: 'ts', name: 'TS', color: '#1976D2' },
];

function SkillsGrid() {
  const { t } = useTranslation('common');

  return (
    <Wrapper id='skills'>
      <Grid>
        {SKILLS.map(({ key, name, color }) => (
          <GridItem key={key} name={name} color={color}>
            <Text>{t(`skills-grid.${key}`)}</Text>
          </GridItem>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default SkillsGrid;
