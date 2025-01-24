import { EntityRepository, Repository } from 'typeorm';
import { SA_ClienteMast } from '../entities/SA_ClienteMast.entity';

@EntityRepository(SA_ClienteMast)
export class SA_ClienteMastRepository extends Repository<SA_ClienteMast> {
  // Add your custom SQL queries or methods here

  async findByCustomCriteria(criteria: any): Promise<SA_ClienteMast[]> {
    return this.createQueryBuilder('cliente')
      .where('cliente.someField = :criteria', { criteria })
      .getMany();
  }

  async executeCustomSQL(sql: string, parameters: any[]): Promise<any> {
    return this.query(sql, parameters);
  }

  async getAllClients(): Promise<SA_ClienteMast[]> {
    return this.query('SELECT * FROM SA_ClienteMast');
  }
}