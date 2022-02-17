import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import Loader from './Loader';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 5 : 20 });
    const newsValue = cryptoNews?.value;

    if (isFetching) return <Loader />;

    return (
        <>
            <Row gutter={[24, 24]}>
                {newsValue?.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className='news-card'>
                            <a href={news.url} target='_blank' rel='noreferrer'>
                                <div className='image-news-container' style={{ display: 'flex' }}>
                                    <Title className='news-title' level={4}>{news.name}</Title>
                                    <img style={{maxHeight:'100px', maxWidth:'100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news' />
                                </div>
                                <p>{news.description}</p>
                            </a>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default News;
