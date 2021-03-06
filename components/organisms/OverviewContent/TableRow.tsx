import cx from 'classnames';

interface TableRowProps {
    title: string,
    kategori: string,
    item: number,
    harga: number,
    status: 'Pending' | 'Success' | 'Failed ',
    image: string
}

export default function TableRow(props: TableRowProps) {

    const {title, kategori, item, harga, status, image} = props
    const classStatusNames = cx({
        'float-start' : true,
        'icon-status': true,
        'pending': status === 'Pending',
        'success': status === 'Success',
        'failed': status === 'Failed',
    });

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width={80}
          height={60}
          alt="game thumbnail"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
           {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {kategori}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{harga}</p>
      </td>
      <td>
        <div>
          <span className={classStatusNames}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
