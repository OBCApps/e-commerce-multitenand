import { EntityRepository, Repository } from 'typeorm';
import { SA_SubCategoriaMast } from '../../entities/SA_SubCategoriaMast.entity';


@EntityRepository(SA_SubCategoriaMast)
export class SA_SubCategoriaMastRepository extends Repository<SA_SubCategoriaMast> {
  // Add your custom SQL queries or methods here

  async findByCustomCriteria(criteria: any): Promise<SA_SubCategoriaMast[]> {
    return this.createQueryBuilder('cliente')
      .where('cliente.someField = :criteria', { criteria })
      .getMany();
  }

  async executeCustomSQL(sql: string, parameters: any[]): Promise<any> {
    return this.query(sql, parameters);
  }

  async getAllClients(): Promise<SA_SubCategoriaMast[]> {
    return this.query('SELECT * FROM SA_SubCategoriaMast');
  }
}