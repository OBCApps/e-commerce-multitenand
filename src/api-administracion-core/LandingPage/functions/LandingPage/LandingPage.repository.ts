/* import { EntityRepository, Repository } from 'typeorm';


@EntityRepository(LandingPage)
export class LandingPageRepository extends Repository<LandingPage> {
  // Add your custom SQL queries or methods here

  async findByCustomCriteria(criteria: any): Promise<LandingPage[]> {
    return this.createQueryBuilder('cliente')
      .where('cliente.someField = :criteria', { criteria })
      .getMany();
  }

  async executeCustomSQL(sql: string, parameters: any[]): Promise<any> {
    return this.query(sql, parameters);
  }

  async getAllClients(): Promise<LandingPage[]> {
    return this.query('SELECT * FROM LandingPage');
  }
} */