import { EntityRepository, Repository } from 'typeorm';
import { SA_CategoriaMast } from '../../entities/SA_CategoriaMast.entity';


@EntityRepository(SA_CategoriaMast)
export class SA_CategoriaMastRepository extends Repository<SA_CategoriaMast> {
  // Add your custom SQL queries or methods here

  async findByCustomCriteria(criteria: any): Promise<SA_CategoriaMast[]> {
    return this.createQueryBuilder('cliente')
      .where('cliente.someField = :criteria', { criteria })
      .getMany();
  }

  async executeCustomSQL(sql: string, parameters: any[]): Promise<any> {
    return this.query(sql, parameters);
  }

  async getAllClients(): Promise<SA_CategoriaMast[]> {
    return this.query('SELECT * FROM SA_CategoriaMast');
  }
}