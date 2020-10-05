import React, {FC, Fragment} from 'react';

const NotFound: FC<any>  = (props: any) => {
    const {history} = props;

    const goBack = (e: any) => {
        e.preventDefault();
        history.push('/');
    }
    return (
        <Fragment>
            <div className="row justify-content-center m-auto mt-5">
                <button className="btn btn-outline-danger not-found" onClick={goBack}> <i className="zmdi zmdi-alert-circle-o"></i> Not Found</button>
            </div>
        </Fragment>
    );
}

export default NotFound;
