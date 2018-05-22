import {Racism} from '../modals/racism.modal';


const RacismList : Racism[]=[
{
  name:'What Is Individual Racism',
  description:
  'Can occur between people, e.g treatment in retail stores and restaurants.',
  avatar_url:'assets/imgs/pic2.jpg',
  color:'green'
},
{
  name:'What Is Systemic Racial Discrimination',
  description:'Embedded in institutional systems; the direct link between residential schools'+
  ' conscious cultural destruction to social issues, such as poverty, education, health and legal '+
  ' issues for indigenous people is an example. ',
  avatar_url:'assets/imgs/pic1.jpg',
  color:'blue'
},
{
  name:'What Is Cultural Racism',
  description:'Social production and reproduction of values and standards which priviledge one group' +
  ' cultural heritage and identity over those of another; encourafe schools to include indigenous '+
  'perspectives and content, reflect the full diversity of South Africa, especially values '+
  'and beliefs beyond holidays, perfomance and food. ',
    avatar_url:'assets/imgs/pic4.jpg',
    color:'pink'
},
{
    name:'What Is Internalized Racism',
    description:'Occurs when people targeted by racism come to believe that the stereotypes and prejudices '+
    ' of racism are valid. They may act out this belief by oppressing others of their own group, or by devaluing' +
    ' themselves through feelings of shame, self-hatred, isolation, powerlessness, self-doubt and despair',
    avatar_url:'assets/imgs/pic3.jpg',
    color:'yellow'

}

]

export  const RACISM_LIST = RacismList;
