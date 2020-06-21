import React from 'react';
import Axios from 'axios'
import './App.css';
import {
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  Card, CardImg, CardBody, CardTitle, CardText, Button
} from 'reactstrap';

let URL = 'http://newsapi.org/v2/top-headlines?country=id&apiKey='
let KEY = 'fbbbc3d3c42b46c4ac7be648a268cf2c'

class News extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      country: ['Argentina', 'Australia', 'Austria', 'Belgium', 'Brazil', 'Bulgaria', 'Canada', 'China', 'Colombia', 'Cuba', 'Czech Republic', 'Egypt', 'French', 'Germany', 'Greece', 'Hong Kong', 'Hungary', 'India', 'Indonesia', 'Ireland', 'Israel', 'Italy', 'Japan', 'Latvia', 'Lithuania', 'Malaysia', 'Mexico', 'Morocco', 'Netherlands', 'New Zealand', 'Nigeria', 'Norway', 'Philippines', 'Poland', 'Portugal', 'Romania', 'Russia', 'Saudi Arabia', 'Serbia', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Sweden', 'Switzerland', 'Taiwan', 'Thailand', 'Turkey', 'UAE', 'Ukraine', 'United Kingdom', 'United States', 'Venuzuela'],
      cate: ['Business', 'Entertainment', 'Health', 'Science', 'Sports', 'Technology'],
      countryTitle: 'Indonesia',
      cateTitle: 'General',
      linkList: ['http://newsapi.org/v2/top-headlines?country=ar&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=au&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=at&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=be&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=br&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=bg&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ca&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=cn&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=co&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=cu&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=cz&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=eg&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=fr&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=de&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=gr&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=hk&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=hu&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=in&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=id&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ie&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=il&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=it&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=jp&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=lv&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=lt&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=my&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=mx&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ma&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=nl&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=nz&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ng&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=no&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ph&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=pl&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=pt&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ro&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ru&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=sa&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=rs&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=sg&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=sk&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=si&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=za&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=kr&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=se&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ch&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=tw&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=th&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=tr&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ae&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ua&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=gb&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=us&apiKey=',
        'http://newsapi.org/v2/top-headlines?country=ve&apiKey='],
      cateLink: ['&category=business',
        '&category=entertainment',
        '&category=health',
        '&category=science',
        '&category=sports',
        '&category=technology',
      ]
    }
  }

  componentDidMount() {
    Axios.get(URL + KEY)
      .then(response => {
        this.setState({ data: response.data.articles })
      })
      .catch(error => console.log(error))
  }

  changeCountry = (index) => {
    // console.log(this.state.linkList[index])
    URL = this.state.linkList[index]
    // console.log(URL)
    Axios.get(URL + KEY)
      .then(response => {
        this.setState({ data: response.data.articles })
      })
      .catch(error => console.log(error))
    let newCountry = this.state.country[index]
    this.setState({ countryTitle: newCountry })
  }

  changeCategory = (index) => {
    let newUrl = URL.slice(0, 46) + this.state.cateLink[index] + URL.slice(46, URL.length)
    console.log(newUrl)
    URL = newUrl
    Axios.get(URL + KEY)
      .then(response => {
        this.setState({ data: response.data.articles })
      })
      .catch(error => console.log(error))
    let newCategory = this.state.cate[index]
    this.setState({ cateTitle: newCategory })
  }

  dropdownCountry = () => {
    return (
      <UncontrolledDropdown>
        <DropdownToggle className="nav-link" caret>
          Country
        </DropdownToggle>
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: '200px',
                  },
                };
              },
            },
          }}
        >
          {this.state.country.map((item, index) => <DropdownItem key={index} onClick={() => this.changeCountry(index)}>{item}</DropdownItem>)}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

  dropdownCategory = () => {
    return (
      <UncontrolledDropdown>
        <DropdownToggle className="nav-link" caret>
          Category
                </DropdownToggle>
        <DropdownMenu
          modifiers={{
            setMaxHeight: {
              enabled: true,
              order: 890,
              fn: (data) => {
                return {
                  ...data,
                  styles: {
                    ...data.styles,
                    overflow: 'auto',
                    maxHeight: '200px',
                  },
                };
              },
            },
          }}
        >
          {this.state.cate.map((item, index) => <DropdownItem key={index} onClick={() => this.changeCategory(index)}>{item}</DropdownItem>)}
        </DropdownMenu>
      </UncontrolledDropdown>
    )
  }

  renderCard = () => {
    return this.state.data.map((item, index) => {
      return (
        <div id='cardDiv' key={index} style={{ width: '23%', height: '60vh' }}>
          <Card style={{ height: '100%', overflow: 'auto', backgroundColor: 'rgba(247,171,175,0.8)' }}>
            <CardImg style={{ width: '100%', height: '180px' }} src={item.urlToImage} alt="article-img" />
            <CardBody>
              <CardTitle style={{ fontWeight: 700, fontSize: '18px' }}>
                {item.title}
              </CardTitle>
              <CardText style={{ fontSize: '14px' }}>
                {item.description}
              </CardText>
              <Button color='danger' style={{ marginBottom: '20px' }} href={item.url}>Button</Button>
            </CardBody>
          </Card>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='maincont'>
        <div className="navigation">
          <div className='left'>
            <div id='title'><h1>News API</h1></div>
            <div>{this.dropdownCountry()}</div>
            <div>{this.dropdownCategory()}</div>
            <div id='countryttl'><h2>{this.state.countryTitle}:</h2></div>
            <div id='categoryttl'><h2>{this.state.cateTitle}</h2></div>
          </div>
          <div className='right'>
            <div id='copyright'><strong>Franky777</strong></div>
          </div>
        </div>
        <div className='cardSection'>{this.renderCard()}</div>
      </div>
    )
  }
}

export default News;
