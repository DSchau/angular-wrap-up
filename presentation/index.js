import React from 'react';

import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  Deck,
  Fit,
  Fill,
  Heading,
  Layout,
  ListItem,
  List,
  Markdown,
  MarkdownSlides,
  Quote,
  S as Span,
  Slide,
  Text
} from 'spectacle';

import 'prismjs';
import 'prismjs/components/prism-typescript';

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  disgusted: 'https://media.giphy.com/media/JvmMnCS1z4VQk/giphy.gif',
  appreciated: 'https://media.giphy.com/media/xSM46ernAUN3y/giphy.gif',
  indifferent: 'https://media.giphy.com/media/l0K4nCoSjvMx0agYE/giphy.gif'
};

preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        progress="bar"
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide bgColor="secondary" textColor="primary">
          <Heading size={1} fit>Angular</Heading>
          <Heading size={6} fit textColor="primary">
            Note: Angular refers to the
            {' '}
            <Span type="italic">latest</Span>
            {' '}
            version of Angular. AngularJS refers to v1.x
          </Heading>
        </Slide>
        <Slide>
          <Heading size={2}>Agenda</Heading>
          <List>
            <ListItem>The <Span type="bold">Great</Span></ListItem>
            <ListItem>The <Span type="bold">Good</Span></ListItem>
            <ListItem>The <Span type="bold">Bad</Span></ListItem>
            <ListItem>The <Span type="bold">Ugly</Span></ListItem>
            <ListItem>Wrap-up</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={2} caps textColor="primary">The Great</Heading>
        </Slide>
        <Slide bgColor="tertiary" textColor="secondary">
          <List>
            <ListItem>Clarified some AngularJS concepts (e.g. props)</ListItem>
            <Appear><ListItem>(Mostly) great CLI</ListItem></Appear>
            <Appear>
              <ListItem>
                <Span type="bold">Stellar</Span> Typescript Integration
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide>
          <Heading size={2}>Props in Angular</Heading>
        </Slide>
        <Slide>
          <Heading size={3}><Code>@</Code></Heading>
          <Code>{`<comp prop="someValue"></comp>`}</Code>
        </Slide>
        <Slide>
          <Heading size={3}><Code>&</Code></Heading>
          <Code>{`<comp (click)="fn()"></comp>`}</Code>
        </Slide>
        <Slide>
          <Heading size={3}><Code>{`<`}</Code></Heading>
          <Code>{`<comp [prop]="ctrlValue"></comp>`}</Code>
        </Slide>
        <Slide>
          <Heading size={3}><Code>=</Code></Heading>
          <Code>{`<input [(ngModel)]="model">`}</Code>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={2} caps textColor="primary">The Good</Heading>
        </Slide>
        <Slide bgColor="tertiary" textColor="secondary">
          <List>
            <ListItem>Hyper modular</ListItem>
            <Appear><ListItem>Batteries included</ListItem></Appear>
            <Appear><ListItem>Easy to do complex things</ListItem></Appear>
            <Appear>
              <ListItem>
                <Span type="italic">Tons</Span> of great ideas
              </ListItem>
            </Appear>
            <Appear><ListItem>Less 👣🔫</ListItem></Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={2} caps textColor="primary">The Bad</Heading>
        </Slide>
        <Slide bgColor="tertiary" textColor="secondary">
          <List>
            <ListItem>Tons of new technology</ListItem>
            <Appear><ListItem>CLI has some issues</ListItem></Appear>
            <Appear>
              <ListItem>
                Is the new way of doing things worth the upgrade?
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Quite a heavy framework (file size
                {' '}
                <Span type="italic">and</Span>
                {' '}
                functionality)
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={2} caps textColor="primary">The Ugly</Heading>
        </Slide>
        <Slide bgColor="tertiary" textColor="secondary">
          <List>
            <ListItem>Testing is needlessly complex (see: next slide)</ListItem>
            <Appear>
              <ListItem>
                Stack traces/error messages are regularly convuluted and complicated
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Not convinced that dependency injection is worth the hassle
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Not convinced that "batteries included" is the right approach
              </ListItem>
            </Appear>
          </List>
        </Slide>
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={require('raw-loader!../assets/code/component.test.ts')}
          ranges={[
            { loc: [0, 27], title: 'Testing an angular component' },
            { loc: [0, 1] },
            { loc: [8, 18] },
            { loc: [18, 25] },
            { loc: [0, 27], title: '😢' }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={require('raw-loader!../assets/code/component.vue.test.ts')}
          ranges={[
            { loc: [0, 18], title: 'Testing a vue component' },
            { loc: [0, 1] },
            { loc: [7, 10] },
            { loc: [11, 16] },
            { loc: [0, 18], title: '👍' }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="typescript"
          code={require('raw-loader!../assets/code/component.ts')}
          ranges={[
            { loc: [0, 12], title: 'A sample Angular component' },
            { loc: [0, 1] },
            { loc: [2, 7] },
            { loc: [8, 10] },
            { loc: [0, 12], title: `¯\\_(ツ)_/¯ ` }
          ]}
        />
        <CodeSlide
          transition={[]}
          lang="html"
          code={require('raw-loader!../assets/code/component.vue')}
          ranges={[
            { loc: [0, 16], title: 'A sample vue component' },
            { loc: [0, 3] },
            { loc: [4, 8] },
            { loc: [10, 15] },
            { loc: [0, 16], title: '😊' }
          ]}
        />
        <Slide bgColor="secondary" textColor="tertiary">
          <Heading size={2} caps textColor="primary">Wrap-up</Heading>
        </Slide>
        <Slide bgImage={images.disgusted} bgDarken={0.2} />
        <Slide bgImage={images.indifferent} bgDarken={0.2} />
        <Slide bgImage={images.appreciated} bgDarken={0.2} />
      </Deck>
    );
  }
}
