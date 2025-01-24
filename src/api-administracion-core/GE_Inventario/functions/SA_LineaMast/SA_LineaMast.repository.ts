import { EntityRepository, Repository } from 'typeorm';
import { SA_LineaMast } from '../../entities/SA_LineaMast.entity';


@EntityRepository(SA_LineaMast)
export class SA_LineaMastRepository extends Repository<SA_LineaMast> {
  // Add your custom SQL queries or methods here

  async findByCustomCriteria(criteria: any): Promise<SA_LineaMast[]> {
    return this.createQueryBuilder('cliente')
      .where('cliente.someField = :criteria', { criteria })
      .getMany();
  }

  async executeCustomSQL(sql: string, parameters: any[]): Promise<any> {
    return this.query(sql, parameters);
  }

  async getAllClients(): Promise<SA_LineaMast[]> {
    return this.query('SELECT * FROM SA_LineaMast');
  }
}