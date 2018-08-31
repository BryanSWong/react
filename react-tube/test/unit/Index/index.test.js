import Index from '../../../src/index.js';

it('renders without crashing', () => {
    expect(JSON.stringify(
        Object.assign({}, Index, { _reactInternalInstance: 'censored' })
    )).toMatchSnapshot();
});