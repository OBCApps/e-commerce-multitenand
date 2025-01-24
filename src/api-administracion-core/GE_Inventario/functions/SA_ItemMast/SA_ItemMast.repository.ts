import { EntityRepository, Repository } from 'typeorm';
import { SA_ItemMast } from '../../entities/SA_ItemMast.entity';


@EntityRepository(SA_ItemMast)
export class SA_ItemMastRepository extends Repository<SA_ItemMast> {
  // Add your custom SQL queries or methods here

  async findByCustomCriteria(criteria: any): Promise<SA_ItemMast[]> {
    return this.createQueryBuilder('cliente')
      .where('cliente.someField = :criteria', { criteria })
      .getMany();
  }

  async executeCustomSQL(sql: string, parameters: any[]): Promise<any> {
    return this.query(sql, parameters);
  }

  async getAllClients(): Promise<SA_ItemMast[]> {
    return this.query('SELECT * FROM SA_ItemMast');
  }
}