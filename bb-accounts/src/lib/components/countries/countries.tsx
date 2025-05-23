import styles from './countries.module.scss';
import { useEffect, useState } from 'react';
import {
  CountryObject,
  GetCountriesListResponse,
} from '@backbase/tyscript-rxjs';
import { map } from 'rxjs/operators';
import { rxApiEndPoint } from '@backbase/auth';
import { Card } from 'react-bootstrap';

/* eslint-disable-next-line */
export interface CountriesProps {}

export function Countries(props: CountriesProps) {
  const [openApiData, setOpenApiData] = useState<CountryObject[]>([]);

  useEffect(() => {
    const fetchData = () => {
      const apiData$ = rxApiEndPoint
        .getCountriesList({})
        .pipe(map((response: GetCountriesListResponse) => response.countries));

      apiData$.subscribe({
        next: (result) => {
          setOpenApiData(result);
        },
        error: (err) => {
          // handle error
        },
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="mb-4 font-weight-bold">Mock Data from OpenAPI Service</h1>
      <Card className="card-container mb-4">
        <Card.Header className='font-weight-bold'>Countries</Card.Header>
        <Card.Body className={styles['countries-list-container']}>
          {openApiData.map((item, index) => (
            <Card key={index} style={{ width: '18rem', margin: '10px' }}>
              <Card.Body>
                <Card.Title>{item.countryName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.countryISOCode}</Card.Subtitle>
              </Card.Body>
            </Card>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Countries;
