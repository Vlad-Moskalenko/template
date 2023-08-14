import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ItemDetails } from 'src/components';
import { getImageDetails } from 'src/services/axiosConfig';

function DetailsPage() {
  const { id } = useParams();
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    getImageDetails(id).then(data => setItemData(data));
  }, [id]);

  return itemData && <ItemDetails itemData={itemData} />;
}

export default DetailsPage;
