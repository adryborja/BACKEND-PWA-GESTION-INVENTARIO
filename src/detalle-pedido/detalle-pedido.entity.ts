import { Pedido } from "src/pedido/pedido.entity";
import { Producto } from "src/producto/producto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'detalle_pedido' })
export class DetallePedido {

    @PrimaryGeneratedColumn({ name: 'id_detalle_pedido' })
    id: number;

    @ManyToOne(() => Pedido, { nullable: false, onDelete: "CASCADE", eager: true })
    pedido: Pedido; // ✅ Se cargará automáticamente en las consultas

    @ManyToOne(() => Producto, { nullable: false, onDelete: "CASCADE", eager: true })
    producto: Producto; // ✅ Se cargará automáticamente en las consultas

    @Column({ type: "int" })
    cantidad: number;

    @Column({ type: "decimal", precision: 10, scale: 2 })
    precio_unitario: number;
}
