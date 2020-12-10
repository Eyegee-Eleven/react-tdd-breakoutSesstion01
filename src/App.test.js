import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import PersonList from './PersonList'


describe('App', () => {
  let appWrapper
  beforeEach(() => {
    appWrapper = shallow(<App />)
  })
  it('renders a PersonList', () => {
    // setup (from before each)
    // exercise
    const personList = appWrapper.find(PersonList)
    // assert
    expect(personList).toHaveLength(1)
  })
  it('has state', () => {
    // setup (from before each)
    // exercise
    const appState = appWrapper.state()
    // assert
    expect(appState).not.toBeNull()
  })
  it('has people property on state', () => {
    // setup (from before each)
    // exercise
    const appState = appWrapper.state()
    // assert
    expect(appState.people).not.toBeUndefined()
  })
  it('passes people to a PersonList', () => {
    const appState = appWrapper.state()
    const personList = appWrapper.find(PersonList)
    expect(personList.props().people).toEqual(appState.people)
  })
})


describe('PersonList', () => {
  let PersonListWrapper
  beforeEach(() => {
    PersonListWrapper = shallow(<PersonList />)
  })
  
  it('it should render',() =>{
    // setup (from before each)
    // exercise
    // const personList = PersonListWrapper
    // assert
    expect(PersonListWrapper).toHaveLength(1)
    
  })

  // it('should render n list for the number of people',() =>{
  //   // setup (from before each)
  //   // exercise
  //   //how many items in our people list?
  //   //how many new itmes in 
  //   //const personList = PersonListWrapper.props().people 
  //   // </PersonList props={bob,jim,joe}>
  //   // const nList = PersonListWrapper.find('li').map((node) => node.text())
  //   // expect(personList).toEqual(nList)

  //   const PersonListWrapperTest = shallow(<PersonList people={['joe', 'jim', 'bob']}/>)
  //   const PersonListWrapperTestProps=PersonListWrapperTest.props()

  //   //const TestBox='<ul><li className="peopleNames">joe</li><li className="peopleNames">jim</li><li className="peopleNames">bob</li></ul>'
    
  //   const nList = PersonListWrapperTest.find('.peopleNames').map((node) => node.text());
  //   expect().toString()).toEqual(PersonListWrapperTestProps.children);
  
  // })
            
  it ('if people =empty => says (There are no people to list)', () =>{
    const PersonListWrapper2 = shallow(<PersonList people = {[]}/>)
    expect(PersonListWrapper2.find('#cow').some('#cow')).toEqual(true)
  })

})  