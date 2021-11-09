import React from 'react';
import { graphql } from 'gatsby';
import cn from 'classnames';

import Layout from '../../components/Layout';
import Breadcrumbs from '../../components/Breadcrumbs';
import ContributionsPanel from '../../components/ContributionsPanel';
import ChallengeVideoSection from '../../components/challenges/VideoSection';
import VideoInfo from '../../components/tracks/VideoInfo';
import ChallengesPanel from '../../components/ChallengesPanel';
import CharacterSpacer from '../../components/CharacterSpacer';

import * as css from '../../styles/pages/challenges/challenge.module.css';
import { pattern } from '../../styles/styles.module.css';

const Track = (props) => {
  const challenge = props.data.challenge;
  console.log({ challenge });
  return (
    <Layout>
      <Breadcrumbs
        className={css.breadcrumbs}
        breadcrumbs={[
          { name: 'Challenges', link: '/challenges' },
          { name: challenge.title, link: `/challenges/${challenge.slug}` }
        ]}
        variant="cyan"
      />
      <ChallengeVideoSection challenge={challenge} />
      <div className={css.blankSep} />
      <VideoInfo video={challenge} variant="cyan" />
      <div className={css.blankSep} />
      <CharacterSpacer
        className={css.sep}
        variant="purple"
        size="x2"
        side="left"
        offset={0.5}
        characterSize={0.7}
      />
      <ContributionsPanel contributions={challenge.contributions} />

      <div className={css.blankSep} />
      <ChallengesPanel />
      <div className={cn(pattern, css.pattern)} />
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    challenge(id: { eq: $id }) {
      title
      slug
      link
      description
      languages
      topics
      timestamps {
        title
        time
        seconds
      }
      codeExamples {
        title
        type
        codeURL
        githubURL
        editorURL
      }
      groupLinks {
        title
        links {
          title
          url
          author
        }
      }
      contributions {
        title
        url
        author {
          name
          url
        }
      }
    }
  }
`;

export default Track;
