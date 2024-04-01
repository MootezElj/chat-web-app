import React from 'react';
import Link from "next/link";

export default function Button (props){
    console.log(props)
    return (
        <Link href={props.link} className={'btn btn-sm btn-'+props.type+' ms-2'}>{props.text}</Link>
    );
};
